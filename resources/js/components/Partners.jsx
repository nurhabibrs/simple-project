import '../styles/Partners.css'

function Partners(prop) {
  return (
    <div className="partner-list">
        {
            prop.partnerList.map((item, index) => {
                return (
                    <div className="kartu-partner" key={index}>
                        <img src={item.image}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Partners
