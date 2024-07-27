// libs
import { Empty } from "antd";

export default function NotFoundPage() {
  return (
    <>
      <Empty
        description="404 | Page Not Found"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        style={{margin: "auto", paddingTop: "3rem"}}
      />
    </>
  );
}
