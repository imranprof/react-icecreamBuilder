import Scoop from '../Scoop/Scoop';
import classes from './IceCream.module.css';

const IceCream = ({scoops}) => {
  // const flavors = Object.keys(scoops);  //convert object to array by key as element
  // console.log(scoops);
  
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {scoops.map((scoop) => (
        <Scoop key ={`${scoop}${Math.random()}`}  scoop = {scoop}/>
        ))}
        <div className={classes.cherry}></div>
      </div>
    </div>
  )
}

export default IceCream;