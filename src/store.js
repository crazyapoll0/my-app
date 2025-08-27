import { create } from "zustand";

const useStore = create((set) => ({
        theme: "light",
        toggleTheme: () =>
            set((prev) => ({
                    theme: prev.theme === 'light' ? 'dark' : 'light'})
            )
}));

export default useStore; 