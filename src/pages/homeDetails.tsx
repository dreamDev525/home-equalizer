import InputTxt from "@/components/inputs/InputText"
import InputNumber from "@/components/inputs/InputNumber"

const HomeDetails = () => {
  return (
    <div className='relative min-h-screen max-w-[640px] mx-auto bg-white pt-8'>
      <div className="py-4">
        <h1 className='text-4xl font-semibold text-center'>Home Details</h1>
      </div>
      <div className="p-4">
        <InputTxt
          name="hdetails_bedroom"
          placeholder="Bedrooms"
        >
        </InputTxt>
        <InputTxt
          name="hdetails_bathroom"
          placeholder="Bathrooms"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="hdetails_Sqft"
          placeholder="Sqft"
          className="mt-5"
        >
        </InputTxt>
        <InputNumber
          name="hdetails_parcel_number"
          placeholder="Parcel number"
          className="mt-5"
        >
        </InputNumber>
        <InputTxt
          name="hdetails_home_type"
          placeholder="Home Type"
          className="mt-5"
        >
        </InputTxt>
        <InputNumber
          name="hdetails_year_built"
          placeholder="Year Built"
          className="mt-5"
        >
        </InputNumber>
        <InputNumber
          name="hdetails_size_lot"
          placeholder="Size of lot"
          className="mt-5"
        >
        </InputNumber>
        <InputNumber
          name="hdetails_lot_demension"
          placeholder="Lot dimensions"
          className="mt-5"
        >
        </InputNumber>
        <InputTxt
          name="hdetails_heating"
          placeholder="Heating"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="hdetails_cooling"
          placeholder="Cooling"
          className="mt-5"
        >
        </InputTxt>
      </div>
      <div className="absolute bottom-10 text-center w-full px-4">
        <span className="block bg-primary rounded-full py-3 text-white text-semibold text-[16px] mt-5">Next</span>
      </div>
      <footer />
    </div>
  )
}

export default HomeDetails