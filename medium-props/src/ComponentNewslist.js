import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';

function NewsList(){
    const articles = [
        {
          description1:'7 Practical CSS Tips',
          description2: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
          image: img1
        },
        {
          description1:'7 Practical CSS Tips',
          description2: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your',
          image: img2
        },
        {
          description1:'7 Practical CSS Tips',
          description2: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your',
          image: img3
        }
      ]
    return (
          articles.map(function(article, index){
            return <div className='Newslist' id='Newslist' key={index}>
            
            <div className='News'>
                <div className='Left'>
                <div className="Top">
                        <div className="Info-top">
                            <img src={img1} alt="" id="avatar"/>
                            <p className="Author">Authors name</p>
                            <p className="Delimetr">in</p>
                            <p className="Topic">Topics name</p>
                            <p className="Delimetr">•</p>
                            <p className="Date">7 july</p>
                        </div>
                        <div className="Top-text">
                            <p className="Desk1">{article.description1}</p>
                            <p className="Desk2">{article.description2}</p>
                        </div>
                    </div>
                    <div class="Info-bottom">
                        <div class="Info">
                            <button class="Info-btn"> 
                                <p id="btn-text">Java Script</p> 
                            </button>
                            <p class="Read">12 min read</p>
                            <p class="Delimetr">·</p>
                            <p class="Sel">Selected for you</p>
                        </div>
                        <div class="Actions">
                            <div class="Icon"></div>
                            <div class="Icon"></div>
                            <div class="Icon"></div>
                        </div>
                    </div>
                </div>
                <img src={article.image} />
            </div>
            
        </div>
          })
        
    );
}

export default NewsList;