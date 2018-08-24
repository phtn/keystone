import { extendObservable } from 'mobx'



class Data {
  constructor(){
    extendObservable(this, {
      email: '',
      getEmailInput(email){
        this.email = email
      },
      emailSent: false,
      setEmailSentToTrue(){
        this.emailSent = !this.emailSent
      },
      // Article Send Data

      article: {
        pathname: 'article',
        title: 'title'
      },
      articles: [],
      getArticles(articles){
        this.articles = articles
      },
      articleTitle: '',
      setArticleTitle(title){
        this.articleTitle = title
      },
      articleDesc: '',
      setArticleDesc(desc){
        this.articleDesc = desc
      },
      articleContent: '',
      setArticleContent(content){
        this.articleContent = content
      },
      articleAuthor: {},
      setArticleAuthor(author){
        this.articleAuthor = author
      },
      articleBadge: {},
      setArticleBadge(badge){
        this.articleBadge = badge
      },
      articleImage: {},
      setArticleImage(file){
        this.articleImage = file
      },
      allowArticleSave(title, desc, content){
        return title !== '' && desc !== '' && content !== '' ? false : true
      },
    })
  }
}
export default Data