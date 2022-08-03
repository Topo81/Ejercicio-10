import{ suma, multiplica } from'./controller'
import{chalk} from 'chalk';
const sum= suma(1,2)
console.log(sum);

const multi= multiplica(4, 5 )
console.log(chalk.green(multi)); 
