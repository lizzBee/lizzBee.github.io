import './PageNotFound.css';
/**
 * @summary error page for incorrect routes
 * @route everything except / or /login
 */
function PageNotFound() {
    return(
        <div>
            <h1 className='facility'>Fool, how did you get here  ?? </h1>
            <div className='ascii-art centroid-box'>
                <br></br>
                <div style={{color:'var(--primaryAccent)', textAlign:'center'}}> skater fox man says : </div>
&nbsp;&nbsp;.      .<br></br>
&nbsp;/ \    / \<br></br>
| # \__/ # |<br></br>
|  _    _  |   . .<br></br>
|  .    .  |  -lml<br></br>
&nbsp;z-___*__-z    | |<br></br>
&nbsp;&nbsp;&nbsp;/____\______| |<br></br>
&nbsp;&nbsp;//#####\ ______j<br></br>
&nbsp;|||#####| |<br></br>
&nbsp;|||#####| |<br></br>
&nbsp;||\#####/ /  ^,<br></br>
&nbsp;w|| /-| /\\_// <br></br>
&nbsp;&nbsp;&nbsp;\|  ||   ---  <br></br>
&lt;&#61;&#61;--&#61;&#61;--&#61;&#61;&gt;<br></br>
                <br></br>
                <div style={{color:'var(--primaryAccent)', textAlign:'center'}}>'rock on' (to the correct domain)</div>
           </div>
        </div>
    )
}

export default PageNotFound;