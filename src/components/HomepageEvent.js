/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// event detail divs
const Info = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 425px) {
    justify-content: inherit;
  }
`;

const calender =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACVSURBVFhH7dGxCYAwEIXh7Jal3MEiC7iOuIC1YG1nY6lETgIBOcLTcDnuh1dcqg/irK+avD8ljVip+HiEIGIGRNcuUNKIler64ZRStBArZcCCDIimHzjOy70n9M7TD/w7fUDui9A7Tx+wdvqA3Behd54+YO30AbkvKr259AFrZ0A0A6K1C1y3XcQMiO4VKGnEssCcuwDgzmLhWVU1zwAAAABJRU5ErkJggg==";

const location =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANZSURBVFhH7ZRPSFRRFManFkHRol3tatu6Fu6GGUdHQx0VVMg/YWGkmGgaBlpDoqZmCgUVWQuD2oRRi7KoaGM67zlqo2M6mviHMHFQ03GUMj2d7/q0zGuM5b9wDnzwuO+c7/u9e997um1TDXr9IdVsfsN6/c5gOKgtb345Y2J2KUFB+ayp3rS0md7U1G+2oCAv1nBPa9ucshmNBiU4uN8ZFzc5XlRE05WVQrh2xsZO8r2+epNJr7VvXCl6/QFbcHCNGhrqHcrNFVCekhJqTz5JH1ie0lKxNnThAqFHMZsfNRiN+7Xx9SuyWnfaTKZ0PkLPx5SUr97ycgEykJVFang4OW7cJsf1W6SGhdNAZqa4hx708pF7MAsPzW5tSzGZjtrM5g5HdLRnrKBAhI9ardQSG0fNqenU2d5H3RMk1OnspSZewz30oBczmIWHzWA4otn+e73V6/c1mM33+JimPmVnz01XVNBkWRm5Uk6TGhlFbU9fUvf43CLconit7ckLUi2RohczmIUHe3nVkJAqeGsxqy/S6XbwkSTyiz7mSk6eFgG8E4PZ2dQYYaH3V8rJ9dmzHOw3uQYnuPcqNVosNJiTIzzEA7InvJGBLC3Wt2owmQ7zUajNFotnZOGICgvJEZ9A9uRT1NHUIYX5kzCDWXjAC57wRgbvqIJMLX7lsoeF7eEnusZP5u3PyJid4iPBS95zJpVU3rW2h4+p68usFMAnjX2ntgc1/EFFCE94IwNZyER2fUDAbg1nadUbjeH86xjuiE/w4peBJ8Rvwh4VRS0XL1NX/4g89C8EL3ja+R1GBrKQiWwwgEXDmi9bSMgr3r1Jd16eaB4vLiZn0gmyH4+n9rpmachaCN7IQBYykT3MDGBRmEnD43cuMFBsNdSXfpYUPoLWqvvUPTojNV5TcUbrnWqRiewFDjBpePOA7vx8UiKjqfnceXJ1D8rN1lHIRDYYwLIMkM/eXZFXJR3eSIGBPxj3UkCjsYx/mntzbtZJhzZSYAALmDS8n7VVADWc5eUH9EHbB7A67diqJPOQaU0Bqe6uT/IDyuQHlJUf0Af5AWXakoDPrQlUeylRXG9JwFprkhCutyTgr9pegM96vD5ptYAyD5n8gDJtL0BfhdDVSOaxkjSc/6F0uh8nF0SVb5MrygAAAABJRU5ErkJggg==";

const clock =
  "data:image/png;base64,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";

const Event = props => {
  return (
    <section>
      <div
        css={css`
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.25),
              rgba(0, 0, 0, 0.25)
            ),
            url(${props.imgURL});
          background-size: cover;
          background-position: center;
          min-height: 400px;
          color: white;
          display: grid;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
        `}
      >
        <div css={css``}>
          {/* <img
            src={props.imgURL}
            alt={props.imgAlt}
            height="400px"
            width="auto"
          /> */}
          <h3
            css={css`
              font-size: 2rem;
              margin-bottom: 0;
            `}
          >
            {props.eventName}
          </h3>
          <p>Live and Silent</p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          text-align: left;
          max-width: 960px;
          margin: 0 auto;
          @media (max-width: 1024px) {
            display: block;
            padding: 3rem;
          }
          @media (max-width: 768px) {
            padding: 0 2rem 2rem;
          }
          @media (max-width: 425px) {
            padding: 0 1.5rem 1rem;
          }
        `}
      >
        <div
          css={css`
            margin-right: 1rem;
            padding-right: 1rem;
            border-right: 1px solid #eee;
            @media (max-width: 1024px) {
              border-right: none;
              margin: 0;
              padding: 0;
              width: 100%;
            }
          `}
        >
          <p>{props.details}</p>
          <p>{props.info}</p>
          <hr
            css={css`
              display: none;
              @media (max-width: 1024px) {
                display: block;
              }
            `}
          />
        </div>
        <div
          css={css`
            min-width: 200px;
            @media (max-width: 1024px) {
              display: grid;
              grid-gap: 10px;
              grid-template-columns: repeat(3, 1fr);
            }
            @media (max-width: 425px) {
              display: block;
            }
          `}
        >
          <Info>
            <span>
              <img
                src={location}
                alt="location"
                css={css`
                  min-width: 25px;
                  max-width: 30px;
                `}
              />
            </span>
            <p
              css={css`
                font-size: 0.7rem;
                margin-left: 0.5rem;
              `}
            >
              {props.location} <br />
              {props.street} <br />
              {props.city}{" "}
              <small
                css={css`
                  display: block;
                `}
              >
                <a href={props.directions}>Directions</a>
              </small>
            </p>
          </Info>
          <Info>
            <span>
              <img
                src={calender}
                alt="event date"
                css={css`
                  min-width: 25px;
                  max-width: 30px;
                `}
              />
            </span>
            <p
              css={css`
                font-size: 0.7rem;
                margin-left: 0.5rem;
              `}
            >
              {props.date}
            </p>
          </Info>
          <Info>
            <span>
              <img
                src={clock}
                alt="event Time"
                css={css`
                  min-width: 25px;
                  max-width: 30px;
                `}
              />
            </span>
            <p
              css={css`
                font-size: 0.7rem;
                margin-left: 0.5rem;
              `}
            >
              {props.time}
            </p>
          </Info>
        </div>
      </div>
    </section>
  );
};

export default Event;
