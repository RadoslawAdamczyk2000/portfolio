import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { IntProjectCard } from "../../../types/interface"
import { Wrapper } from "./styles"
const Card = ({button,content,image,path,stack,title}:IntProjectCard) => {
    return(
        <Wrapper>
            <div className="image">
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        title={title}
                        quality={65}
                    />
                </figure>
            </div>
            <section>
                <h3 dangerouslySetInnerHTML={{__html:title}}/>
                <ul>
                    {stack.map((item:ReactElement,key:number) =>
                        <li key={key}>
                            {item}
                        </li>
                    )}
                </ul>
                <p dangerouslySetInnerHTML={{__html:content}}/>
                <div>
                    <Link href={path}>
                        <a target='_blank' rel='open index follow'>
                            {button}
                        </a>
                    </Link>
                </div>
            </section>
        </Wrapper>
    )
}
export default Card;