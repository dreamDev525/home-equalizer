import InputSearch from "@/components/inputs/InputSearch"
import Neighborplace from "@/components/neighborplace"

const neiborhood = () => {
  const hotData = [
    {
      id: 0,
      img: '/img/hot-0.jpg',
      text: '2500 Liberty Hill Rd Newark, NJ',
      cost: 199999
    },
    {
      id: 1,
      img: '/img/hot-1.jpg',
      text: '2589 King Hill Rd Newark, NJ',
      cost: 199999
    },
    {
      id: 2,
      img: '/img/hot-2.jpg',
      text: '234 Columbia Ave Newark, NJ',
      cost: 199999
    },
    {
      id: 3,
      img: '/img/hot-3.jpg',
      text: '2500 Liberty Hill Rd Newark, NJ',
      cost: 199999
    },
    {
      id: 4,
      img: '/img/hot-0.jpg',
      text: '2500 Liberty Hill Rd Newark, NJ',
      cost: 199999
    },
    {
      id: 5,
      img: '/img/hot-1.jpg',
      text: '2589 King Hill Rd Newark, NJ',
      cost: 199999
    },
    {
      id: 6,
      img: '/img/hot-2.jpg',
      text: '234 Columbia Ave Newark, NJ',
      cost: 199999
    },
    {
      id: 7,
      img: '/img/hot-3.jpg',
      text: '2500 Liberty Hill Rd Newark, NJ',
      cost: 199999
    },
  ]
  const trendingData = [
    {
      id: 0,
      img: '/img/trending-0.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
    {
      id: 1,
      img: '/img/trending-1.jpg',
      text: '108 Brookdale Ave Newark NJ',
      cost: 199999
    },
    {
      id: 2,
      img: '/img/trending-2.jpg',
      text: '11-13 Vermont Ave Newark, NJ',
      cost: 199999
    },
    {
      id: 3,
      img: '/img/trending-3.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
    {
      id: 4,
      img: '/img/trending-0.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
    {
      id: 5,
      img: '/img/trending-1.jpg',
      text: '108 Brookdale Ave Newark NJ',
      cost: 199999
    },
    {
      id: 6,
      img: '/img/trending-2.jpg',
      text: '11-13 Vermont Ave Newark, NJ',
      cost: 199999
    },
    {
      id: 7,
      img: '/img/trending-3.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
  ]
  const dealsData = [
    {
      id: 0,
      img: '/img/deal-0.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
    {
      id: 1,
      img: '/img/deal-1.jpg',
      text: '108 Brookdale Ave Newark NJ',
      cost: 199999
    },
    {
      id: 2,
      img: '/img/deal-2.jpg',
      text: '11-13 Vermont Ave Newark, NJ',
      cost: 199999
    },
    {
      id: 3,
      img: '/img/deal-3.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
    {
      id: 4,
      img: '/img/deal-0.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
    {
      id: 5,
      img: '/img/deal-1.jpg',
      text: '108 Brookdale Ave Newark NJ',
      cost: 199999
    },
    {
      id: 6,
      img: '/img/deal-2.jpg',
      text: '11-13 Vermont Ave Newark, NJ',
      cost: 199999
    },
    {
      id: 7,
      img: '/img/deal-3.jpg',
      text: '167 Norwood Ave Newark NJ',
      cost: 199999
    },
  ]
  return (
    <div className="bg-white relative min-h-screen max-w-[640px] mx-auto pt-8 px-4">
      <div className="flex">
        <span className="text-primary mr-auto my-auto select-none">Back</span>
        <h1 className="mx-auto text-4xl select-none font-semibold">Neighborhood</h1>
        <span className="text-primary ml-auto my-auto select-none">Filter</span>
      </div>
      <div className="mt-8">
         <InputSearch
          name="search_hood"
          placeholder="Search"
          className=""
        ></InputSearch>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Hot deals</h1>
        <div className="overflow-x-auto w-[100%]">
          <div className="inline-flex mt-4">
            {
              hotData.map(el => (
                <Neighborplace
                  key={el.id}
                  src={el.img}
                  text={el.text}
                  className="mr-4"
                  cost={el.cost}
                ></Neighborplace>
              ))
            }
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Trending</h1>
        <div className="overflow-x-auto w-[100%]">
          <div className="inline-flex mt-4">
            {
              trendingData.map(el => (
                <Neighborplace
                  key={el.id}
                  src={el.img}
                  text={el.text}
                  className="mr-4"
                  cost={el.cost}
                ></Neighborplace>
              ))
            }
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Deals</h1>
        <div className="overflow-x-auto w-[100%]">
          <div className="inline-flex mt-4">
            {
              dealsData.map(el => (
                <Neighborplace
                  key={el.id}
                  src={el.img}
                  text={el.text}
                  className="mr-4"
                  cost={el.cost}
                ></Neighborplace>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default neiborhood