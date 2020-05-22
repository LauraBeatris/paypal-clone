import styled from 'styled-components';
import media from 'styled-media-query';

export const TableContainer = styled.section`
  margin-top: 64px;

  header {
    display: flex;
    justify-content: space-between;

    p {
      color: #333333;
      font-weight: bold;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      ${media.lessThan('medium')`
        padding: 10px 12px;
      `}
    }

    p:last-of-type {
      color: #1e579e;
    }
  }

  table {
    min-width: 100%;
    border-spacing: 0 8px;
    padding: 20px 32px;

    ${media.lessThan('medium')`
      padding: 10px 12px;
    `}

    tbody {
      width: 100%;
    }

    td {
      border: 0;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:last-child {
      text-align: right;
    }
  }
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;

  td {
    border: 0;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;
    display: flex;
    flex-direction: column;

    .title {
      color: #363f5f;
    }

    .income {
      color: #12a454;
    }

    .outcome {
      color: #e83f5b;
    }
  }

  td:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }
`;