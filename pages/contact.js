import Head from "next/head";

export default function Contact() {
    return(
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta
                property="og:description"
                content="BCIT Digital Design and Development Diploma"
                />
                <meta
                property="viewport"
                content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
                <body className="contact" />
            </Head>
            <main>

                <div>
                    <h1>Contact Us</h1>
                    <p>Want to discuss? Let's chat!</p>
                </div>
                <div>
                    <form type="submit" style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>
                        <fieldset>
                            <table>
                                <thead>First Name:
                                    <tr>
                                    <input type="text" id="firstName"  />
                                    </tr>
                                </thead>
                                <thead>Last Name:
                                    <tr>
                                    <input type="text" id="lastName"  />
                                    </tr>
                                </thead>

                                {/* <th>Email:
                                    <tr><input type="text" id="email" /></tr>
                                </th> */}

                                
                            </table>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </form>

                </div>

                <a href='/about' className='arrow'>
                    <span><img src="/icons/upwardArrow.png" /></span>
                </a>
            </main>
        </>
    )
}