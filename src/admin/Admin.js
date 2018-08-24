import React from 'react'
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import Data from '../observables/Data'



const articleData = new Data()

const styles = {
  container: {
    height: 600
  },
  title: {
    textTransform: 'uppercase',
    backgroundColor: '#333',
    color: 'tomato',
    padding: 5
  },
  form: {
    margin: 50
  }
}


const saveArticle = (fb, title, desc, author, badge, content, createdAt, imageFile) => {
  let article = {
    title, desc, author, badge, content, createdAt, imageFile
  }
  fb.database()
    .ref("/articles")
    .push(article);
};

const uploadImage = (fb,file) => {
  let storageRef = fb.storage().ref(`/images/${toHex(articleData.articleTitle)}`)
  storageRef.put(file).then(()=> console.log('file uploaded'))
}

const clearData = () => {
  articleData.setArticleTitle('')
  articleData.setArticleDesc('')
  articleData.setArticleContent('')
}

const toHex = str => {
  let arr = []
  for (let i=0; i<str.length; i++){
    let hex = Number(str.charCodeAt(i)).toString(16)
    arr.push(hex)
  }
  let joined = arr.join('')
  return joined
}

const AdminPage = observer( class Admin extends React.Component {
  render(){
    return(
      <div style={styles.container}>
        <p style={styles.title}> 🛠 admin </p>
        <div style={styles.form}>
          <Segment color='blue'>
            <h3>   Composer</h3>
          </Segment>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-title'
                control={Input}
                label='Title'
                onChange={(e)=> articleData.setArticleTitle(e.target.value)}
              />
              <Form.Field
                id='form-input-control-description'
                control={Input}
                label='Description'
                placeholder='Description'
                onChange={(e)=> articleData.setArticleDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-author'
                control={Input}
                label='Author'
                onChange={(e)=> articleData.setArticleAuthor(e.target.value)}
              />
              <Form.Field
                id='form-input-control-badge'
                control={Input}
                label='Article Badge'
                placeholder='e.g. "Tech" or "Health"'
                onChange={(e)=> articleData.setArticleBadge(e.target.value)}
              />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-content'
              control={TextArea}
              label='Content'
              placeholder='Write content here...'
              onChange={(e)=> articleData.setArticleContent(e.target.value)}
            />
            <Form.Field
              id='form-input-control-title'
              control={Input}
              label='Upload Image Thumbnail'
              placeholder='Image'
              type='file'
              onChange={(e)=> {
                let file = e.target.files[0]
                articleData.setArticleImage(file)
              }}
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Save'
              label=''
              color='blue'
              disabled={articleData.allowArticleSave(articleData.articleTitle, articleData.articleDesc, articleData.articleContent)}
              onClick={()=> {
                saveArticle(
                  this.props.fire,
                  articleData.articleTitle, 
                  articleData.articleDesc,
                  articleData.articleAuthor,
                  articleData.articleBadge, 
                  articleData.articleContent, 
                  Date(),
                  toHex(articleData.articleTitle)
                )
                uploadImage(this.props.fire, articleData.articleImage)
                toHex(articleData.articleTitle)
                clearData()
              }}
            />
          </Form>
        </div>
      </div>
    )
  }
})
export default AdminPage