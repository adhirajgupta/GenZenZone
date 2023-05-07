import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
// import ReactMarkdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
import {markdown,markdown2,markdown3} from './pos1'

function Main(props) {
  const {  title } = props;


  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {/* {posts.map((post) => ( */}
        <ReactMarkdown >
          {markdown}
        </ReactMarkdown>
        <ReactMarkdown >        
          {markdown2}
        </ReactMarkdown>
        
        <ReactMarkdown >        
          {markdown3}
        </ReactMarkdown>
      {/* ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Main;
