
interface IProps { 
  children: React.ReactNode
}

export default async function Layout(props: IProps) {

  const { 
    children,
  } = props

  
  return (
    <div className="flex space-x-6">
      {/* <div className="hidden md:block">
        <SplitbeeSidebar />
      </div> */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
  

}