I have successfully implemented the payment success modal in `Checkout.tsx` according to the Figma design specifications.

**Implementation Details:**
1.  **Figma Data Retrieval:** Used the Figma bridge to get precise details (colors, fonts, layout) for the modal (Node 2829-4180).
2.  **Component Structure:**
    *   Created `PaymentSuccessModal` component within `Checkout.tsx`.
    *   Used `fixed` positioning with `z-50` and `backdrop-blur` for the overlay.
    *   Implemented the specific design: Black header, white body, correct typography and colors (`#292D32`, `#1053D5`).
    *   Used an empty `<img>` tag for the icon as requested.
3.  **Responsiveness:**
    *   Added `w-full max-w-[400px]` to ensure it looks good on both mobile and desktop.
    *   Added padding to the overlay to prevent the modal from touching screen edges on small devices.
4.  **Integration:**
    *   Added `showSuccessModal` state.
    *   Connected the "Pay Now" button to open the modal.
    *   Added the modal component to the `Checkout` render tree.

The code is now ready and integrated into `src/pages/buyer/landing/Checkout.tsx`.