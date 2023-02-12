import { Part } from "./Part"

export const Content = (props) => {
    return (
        <div>
            <Part part={props.contents[0].part} exercise={props.contents[0].exercise} />
            <Part part={props.contents[1].part} exercise={props.contents[1].exercise} />
            <Part part={props.contents[2].part} exercise={props.contents[2].exercise} />
        </div>
    )
}