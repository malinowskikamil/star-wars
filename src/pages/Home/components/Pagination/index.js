import React from "react";
import { Link, withRouter } from "react-router-dom";
import StyledPagination from "./styles";
import queryString from "query-string";
const limits = [10, 20, 30, 40, 50];

const Pagination = ({ total_pages = 10, limit = 10, current_page = 1, count = 0, location, history }) => {
  const query = queryString.parse(location.search);
  const handleSetPage = page => {
    history.push("?" + queryString.stringify({ ...query, page }));
  };
  const handleSelectChange = limit => {
    history.push("?" + queryString.stringify({ ...query, page: undefined, limit }));
  };
  return (
    <StyledPagination>
      <div className='pagination-left'>
        <button onClick={() => handleSetPage(undefined)} className='pagination-item arrow' disabled={current_page < 2}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewBox='0 0 24 24'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <polygon points='0 0 24 0 24 24 0 24' />
              <path
                d='M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z'
                fill='#000000'
                fillRule='nonzero'
                transform='translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) '
              />
              <path
                d='M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z'
                fill='#000000'
                fillRule='nonzero'
                opacity='0.3'
                transform='translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) '
              />
            </g>
          </svg>
        </button>
        <button onClick={() => handleSetPage(current_page - 1)} className='pagination-item arrow' disabled={current_page < 2}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewBox='0 0 24 24'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <polygon points='0 0 24 0 24 24 0 24' />
              <path
                d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                fill='#000000'
                fillRule='nonzero'
                transform='translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999) '
              />
            </g>
          </svg>
        </button>
        <>
          {Array(total_pages)
            .fill(null)
            .map((item, index) => {
              const pag = index + 1;
              if (current_page - 5 < index && current_page + 3 > index) {
                return (
                  <Link
                    key={pag}
                    to={"?" + queryString.stringify({ ...query, page: pag })}
                    className={`pagination-item ${pag === Number(current_page) ? "active" : ""}`}
                  >
                    {pag}
                  </Link>
                );
              }
              return null;
            })}
        </>
        <button onClick={() => handleSetPage(current_page + 1)} disabled={current_page + 1 > total_pages} className='pagination-item arrow'>
          <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='24px' height='24px' viewBox='0 0 24 24'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <polygon points='0 0 24 0 24 24 0 24' />
              <path
                d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                fill='#000000'
                fillRule='nonzero'
                transform='translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999) '
              />
            </g>
          </svg>
        </button>
        <button onClick={() => handleSetPage(total_pages)} disabled={current_page + 1 > total_pages} className='pagination-item arrow'>
          <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='24px' height='24px' viewBox='0 0 24 24'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <polygon points='0 0 24 0 24 24 0 24' />
              <path
                d='M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z'
                fill='#000000'
                fillRule='nonzero'
              />
              <path
                d='M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z'
                fill='#000000'
                fillRule='nonzero'
                opacity='0.3'
                transform='translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) '
              />
            </g>
          </svg>
        </button>
      </div>
      <div className='pagination-right'>
        <select className='selectbox' defaultValue={limit} onChange={({ target: { value } }) => handleSelectChange(value)}>
          {limits.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <span className='pagination-info'>
          Showing {(current_page - 1) * limit + 1}-{current_page * limit} of {count}
        </span>
      </div>
    </StyledPagination>
  );
};

export default withRouter(Pagination);
