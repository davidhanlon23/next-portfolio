import Layout from '../components/Layout';
import {withRouter} from 'next/router';
const Post =  ({router})=>(
    <Layout title={router.query.title}>
        <p>alsdjf;lksajd;lfkjsa;dlkfja;slkdjf;lskdjf;laksjdf;laksjd;f</p>
    </Layout>
);

export default withRouter(Post);
