import React, { Component } from 'react';
import styled, { css } from 'styled-components';


const Content=styled.div`


.img-div{
	max-width: 275px; 
	flex-grow: 1;
  }
  
  .img{
	overflow:hidden;
	max-height:300px;
	box-shadow: 2px 2px 5px black;
  }
  
`


 const Strong=styled.div`

	display: inline-flex;
	flex-flow: row wrap-reverse;
	justify-content: center;
	align-content:flex-end;
	padding:5%;
	width:auto;
  
  
 
 `
const Intro = styled.div`
  p {
    font-size:11px;
 	 color: #FFFFFF;
    transition: color 180ms ease-in;
    color: ${props => props.color ||  'black'}
  }
  p span {
    font-size: 1.5em;
  }
  & {
    span.parent {
      font-size: 0.6em;
    }
  }
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`


class MovieCard extends Component {


  	render() {
    	return (
			<Strong>

			<div className="card">
			<Content>
	        	<div  className="img-div">
	          		<img src={this.props.url} className="img" alt={this.props.title} />
	          	</div>
			</Content>	  
			    	<div className="detail-div">
				  
	          		<div className="txt-header"> 
	            	
						{this.props.title}
				 
				    </div>
					  
				<Intro>
						  <p className="txt">
	            		{this.props.text}
	            	</p>
					</Intro>

	            	<Container>
					<div>
						<Button>Boy now</Button>
						
						<Button primary>Play Trailer</Button>
						
					</div>
				</Container>
	            </div>
			</div>
			</Strong>

    	);
  	}
}

export default MovieCard;