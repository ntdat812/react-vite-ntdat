import { Drawer } from "antd";


const ViewUserDetail = (props) => {
    const { setDataDetail, dataDetail, setIsDetailOpen, isDetailOpen } = props
    console.log("Check data detail: ", dataDetail)
    return (
        <Drawer title="Chi tiết User"
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
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                    <br />
                </>
            }

        </Drawer>
    )
}

export default ViewUserDetail