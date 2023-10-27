const BioBox = () => {
  return (
    <div className="biobox">
      <h4>Your overview</h4>
      <textarea
        className="textbox"
        maxLength="3000"
        placeholder="I am a full-service, licensed attorney with over 20 years of experience and an impeccable track record of consistently and effectively resolving my client's legal problems."
      ></textarea>
      {/* <span className="count">You have {3000-val.length} left</span> */}
    </div>
  )
}

export default BioBox
