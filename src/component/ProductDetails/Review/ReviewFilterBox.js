import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import {useState} from "react";
import "./reviewFilterBox.scss"

export const ReviewFilterBox = ({isTrue}) => {

    const [isHover, setIsHover] = useState(false)

    return <div className="filterBox"
         onMouseEnter=
             {() => setIsHover(true)}
         onMouseLeave=
             {() => setIsHover(false)}
    >

        <div className="checkbox">
            {isTrue ? <CheckBoxSharpIcon/> : <CheckBoxOutlineBlankSharpIcon/>}
        </div>

        <div className="hoverCheck">
            {isHover && !isTrue && <CheckBoxSharpIcon/>}
        </div>

    </div>

}



