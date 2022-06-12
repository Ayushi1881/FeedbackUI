import Card from "../Components/shared/Card"
import { Link } from "react-router-dom"

function AboutPages() {
  return (
    <Card>
      <div className="p-2 text-center w-screen">
        <h1 className="font-bold text-2xl text-lime-600">About this Project</h1>
        <p>This is react app to leave feadback for a product or service.</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/" className="link text-lime-500">Back to home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPages