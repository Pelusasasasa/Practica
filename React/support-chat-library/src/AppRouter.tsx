import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import AuthLayout from "./auth/layout/AuthLayout"
import { LoginPage } from "./auth/pages/LoginPage"
import { RegisterPage } from "./auth/pages/RegisterPage"
import { lazy, Suspense } from "react"
import { sleep } from "./lib/sleep"
import { PrivateRoute } from "./auth/components/PrivateRoute"
import { useQuery } from "@tanstack/react-query"
import { checkAuth } from "./fake/fake-data"

const ChatLayout = lazy(async () => {
    await sleep(1500)
    return import('./chat/layout/ChatLayout')
});

const ChatPage = lazy(() => import("./chat/pages/ChatPage"))
const NotChatSelectedPage = lazy(() => import("./chat/pages/NotChatSelectedPage"))


export const AppRouter = () => {
    const { data: user, isLoading, isError, error } = useQuery({
        queryKey: ['user'],
        queryFn: () => {
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('No existe Token')
            };

            return checkAuth(token);
        }
    });

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <svg className="animate-spin h-8 w-8 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span className="text-muted-foreground text-sm">Cargando...</span>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout />} >
                    <Route index element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                </Route>

                <Route path='/chat' element={
                    <Suspense fallback={
                        <div className="flex items-center justify-center h-full w-full py-20">
                            <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        </div>
                    }>
                        <PrivateRoute isAuthenticated={!!user}>
                            <ChatLayout />
                        </PrivateRoute>
                    </Suspense>
                } >
                    <Route index element={<NotChatSelectedPage />} />
                    <Route path="/chat/:clientId" element={<ChatPage />} />
                </Route>


                <Route path='/' element={<Navigate to='/auth' />} />
                <Route path='*' element={<Navigate to='/auth' />} />


            </Routes>
        </BrowserRouter>
    )
}