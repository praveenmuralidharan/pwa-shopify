function Divider(args) {
  return (
    <>
        <div className={"border-t pt-1 pb-1 " + (args.extraClass !== undefined ? args.extraClass : "")}></div>
    </>
  )
}

export default Divider