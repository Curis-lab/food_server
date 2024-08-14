import {Pool} from 'pg';
//psql postgres://nyanlin@localhost:5432/nyanlin

const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'nyanlin',
    database:'nyanlin'
});
pool.connect((err)=>{
    if(err){
        console.error('connection error', err.stack);
    }else{
        console.log('connected');
    }
})
export default pool;