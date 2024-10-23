//NameFuntion = () => {}
//component = html + css + js

//Duoi day la mot conponent

import "./style.css"
const MyComponent = () => {
    //const ntdat = " datphit ";
    //const ntdat = 812;
    //const ntdat = true;
    //const ntdat = undefined;
    const ntdat = [1, 2, 3];
    // const ntdat = {
    //     name: "nguyenthanhdat",
    //     age: 21
    // };
    return (
        <>
            <div cal>
                {JSON.stringify(ntdat)}
                Nguyen Thanh Dat 08/12/2003
            </div>
            <div>{console.log("Cap dau dong mo ngoac cho phep su dung js trong html")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}>
            </div>
        </>
    );
}

export default MyComponent