import '../styles/Contacs.css'
import parser from 'html-react-parser'

function Contacts(prop) {
  return (
    <div id="contact">
        <div className="wrapper">
            <div className="footer">
                {
                    prop.contactSection.map((item, index) => {
                        return (
                            <div className="footer-section" key={index}>
                                {parser(item.content)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Contacts
