
export default function  WithLoggin(Commponent) {
    return function WithLoggin(props){
        console.log(props);
        <Commponent {...props}></Commponent>
    }
}