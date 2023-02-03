import './Medium.css';
import {HeaderFirst, HeaderSecond} from './ComponentHeader';
import NewsList from './ComponentNewslist';
import Footer  from './ComponentFooter';


function Medium() {
    return (
        <div className="New-list">
            <HeaderFirst/>
            <HeaderSecond/>
            <NewsList/>
            <Footer/>
        </div>
    );
}

export default Medium;