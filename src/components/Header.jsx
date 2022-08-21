const Header = (props) => {
    return (
        <>
            <div className="header">
            <h5 className="title">{props.title}</h5>
            <h1 className="details" >{props.details}</h1>
            <h6 className="caption">{props.caption}</h6>
            <h4 className="introduction"><samll>{props.introduction}</samll></h4>
            </div>
        </>
    );
}
export default Header;