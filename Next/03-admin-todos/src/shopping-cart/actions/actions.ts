import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) || "{}");
    return cookieCart;
  }

  return {};
};

export const addProductToCart = (productId: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[productId]) {
    cookieCart[productId]++;
  } else {
    cookieCart[productId] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (productId: string) => {
  const cookieCart = getCookieCart();
  delete cookieCart[productId];

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = (productId: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[productId] === 1) {
    delete cookieCart[productId];
  } else {
    cookieCart[productId]--;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};
