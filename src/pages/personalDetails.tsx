import InputTxt from "@/components/inputs/InputText"
import Checkbox from "@/components/checkbox/Checkbox"

const personalDeTails = () => {
  const handleCheck = (val: boolean) => {
    console.log(val)
  }

  return (
    <div className='relative min-h-screen max-w-[640px] mx-auto bg-white pt-8'>
      <div className="py-4">
        <h1 className='text-4xl font-semibold text-center'>Personal Details</h1>
      </div>
      <div className="p-4">
        <InputTxt
          name="pdetails_first_name"
          placeholder="First Name"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_last_name"
          placeholder="Last Name"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_birthday"
          placeholder="Date of Birth"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_ssn"
          placeholder="SSN"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_income"
          placeholder="Annual income"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_mortgage"
          placeholder="Mortgage amount"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_resisdence"
          placeholder="Years at residence"
          className="mt-5"
        >
        </InputTxt>
        <InputTxt
          name="pdetails_lender"
          placeholder="Name of lender"
          className="mt-5"
        >
        </InputTxt>
        <div className="mt-5 px-1">
          <span className="text-[18px] text-semibold">
            This is to confirm that you are entering the correct home and lender information
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 text-center w-full px-4">
        <Checkbox
          name="agree_terms"
          text="I agree to the terms and conditions..."
          onChange={handleCheck}
          className="text-primary text-center"
        ></Checkbox>
        <span className="block bg-primary rounded-full py-3 text-white text-semibold text-[16px] mt-5">Next</span>
      </div>
    </div>
  )
}

export default personalDeTails