import { Drawer } from "antd";


const ViewUserDetail = (props) => {
    const { setDataDetail, dataDetail, setIsDetailOpen, isDetailOpen } = props
    console.log("Check data detail: ", dataDetail)
    return (
        <Drawer
            width={"40vw"}
            title="Chi tiết User"
            onClose={() => {
                setIsDetailOpen(false)
                setDataDetail("")
            }}
            open={isDetailOpen}>
            {dataDetail ? <>
                <p>ID:  {dataDetail._id}</p>
                <br />
                <p>Full name: {dataDetail.fullName}</p>
                <br />
                <p>Email:  {dataDetail.email}</p>
                <br />
                <p>Phone name: {dataDetail.phone}</p>
                <br />
                <p>Avatar:</p>
                <div>
                    <img
                        height={120} width={120} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange ",
                        borderRadius: " 5px",
                        cursor: "pointer",
                    }}  >Upload avatar</label>
                    <input type="file" hidden id="btnUpload" />
                </div>
                {/* <Button type="primary" >Upload file</Button> */}

            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                    <br />
                </>
            }

        </Drawer >
    )
}

export default ViewUserDetail