var myStyle = {
    fontSize:100,
    color:'#f00'
}
let arr =[

  <h2>jjjjjj*</h2>,
  <h2>jjadfadf</h2>
]
class Clock extends React.Component {
    render(){
        return (

        
            <div>
                    {/* 注释....*/}
                <h1 style={myStyle}>hello world!{9+9}</h1>
                <h3>{arr}</h3>
                <h2>Time:{this.props.data.date.toLocaleTimeString()}</h2>
                <h3>{ this.props.data.i>8?'true':'false' }</h3>
            </div>
        )
    }
}


function tick(){

    ReactDOM.render(
        <Clock data={ {date:new Date(),i:8} }/>,
        document.getElementById('app')
    )
}

setInterval(tick, 1000);