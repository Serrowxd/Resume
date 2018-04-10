import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const BodyCard = props => {
  return (
    <div>
      <Card inverse>
        <CardImg
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <CardTitle>Project</CardTitle>
          <CardText>Project goes here!</CardText>
          <CardText>
            <small className="text-muted">Click here to see it!</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default BodyCard;
