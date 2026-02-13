// import { createReducer } from '@reduxjs/toolkit';

// import { fetchOfferById } from '../async-actions/offer-action';

// import { RequestStatus } from '../../const';

// import { Offer } from '../../types/offer-data';

// type OfferState = {
//   currentOffer: Offer | null;
//   status: RequestStatus;
// }

// const initialState:OfferState = {
//   currentOffer: null,
//   status: RequestStatus.Idle,
// };

// export const offerReducer = createReducer(initialState,(builder) => {
//   builder

//     .addCase(fetchOfferById .pending, (state) => {
//       state.status = RequestStatus.Loading;
//     })

//     .addCase(fetchOfferById .fulfilled, (state, action) => {
//       state.status = RequestStatus.Success;
//       state.currentOffer = action.payload;
//     })

//     .addCase(fetchOfferById .rejected, (state) => {
//       state.status = RequestStatus.Failed;
//       tate.currentOffer = null;
//     });
// });
