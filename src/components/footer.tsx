
const footer = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4 h-[100px] w-full p-3">
      <div>
        <img src="/img/home_active.svg" className="h-5"/>
        <span>Home</span>
      </div>
      <div>
        <img src="/img/card_disabled.svg"/>
        <span>Account</span>
      </div>
      <div>
        <img src="/img/document_disabled.svg"/>
        <span>Documents</span>
      </div>
      <div>
        <img src="/img/profile_disabled.svg"/>
        <span>Profile</span>
      </div>
    </div>
  )
}

export default footer