import {Link} from "react-router-dom"

function Welcome() {
    return(
        <>
        <main className="welcome-main">
            <section>
                <button className="btn btn-primary"><Link to={'/'}>Home</Link></button>
            </section>
        </main>
        </>
    )
}

export default Welcome;