import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      console.log('Clicked Document');
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  })
}