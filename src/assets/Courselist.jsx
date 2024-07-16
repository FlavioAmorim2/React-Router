import { Link } from "react-router-dom"

const Courselist = () => {
return (
    <>
        <h1>Bem vindo a hashtag</h1>
        <nav >
            <ul className="courses-list">
                <li>
                    <Link>Js</Link>
                </li>
                <li>
                    <Link>sql</Link>
                </li>
                <li>
                    <Link>html/css</Link>
                </li>
                <li>
                    <Link>python</Link>
                </li>

            </ul>
        </nav>
    </>
)
}

export default Courselist