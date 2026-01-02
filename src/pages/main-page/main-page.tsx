// import HeaderBlock from '../../components/layout/header-block.tsx';
import TabsFragment from './components/tabs-fragment.tsx';
import SortingFragment from './components/sorting-fragment.tsx';
import CardBlock from '../../components/card-block/card-block.tsx';
import MapBlock from '../../components/map-block.tsx';
import { offers } from '../../mock/offers.ts';

export default function MainPage () {
  return (
    <div className="page page--gray page--main">
      {/* <HeaderBlock showAuthInfo/> */}

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsFragment/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortingFragment/>
              <div className="cities__places-list places__list tabs__content">
                { offers.map((offer) => (
                  <CardBlock
                    key = { offer.id }
                    offer = { offer }
                  />
                ))};
              </div>
            </section>
            <MapBlock/>
          </div>
        </div>
      </main>
    </div>
  );
}


