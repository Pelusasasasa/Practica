export const enviromentsComponent = (element) => {
    const html = `
        DEV: ${import.meta.env.DEV}
        <br>
        PROD: ${import.meta.env.PROD}
        <br>
        VITE_BASE_URL: ${import.meta.env.VITE_BASE_URL}}
    `;
    element.innerHTML = html;
}