import {
  Box,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Theme,
} from "@mui/material";
import tableLeftCorner from "assets/images/table/tableLeftCorner.png";
import tableRightCorner from "assets/images/table/tableRightCorner.png";
import { FONTS } from "lib/theme";
import { DateTime } from "luxon";
import { StrapiContext } from "providers/StrapiPublicProvider";
import { useContext } from "react";
import SolIcon from "components/Icons/SolIcon";

export type IntroDataTablePropsType = {
  children?: any;
};

const textGradient: SxProps<Theme> = {
  color: "#fff",
  fontFamily: FONTS.MOKOTO,
  fontSize: [14, 14, 18],
};

const IntroDataTable: React.FC<IntroDataTablePropsType> = ({ children }) => {
  const { totalSupply, mintPrice, mintDate } = useContext(StrapiContext);
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          minWidth: [0, 0, "500px"],
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            borderImageSlice: 1,
            borderImageSource:
              "linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)",
            borderRadius: "6px",
            position: "relative",
            margin: "5px 0",
            p: [1, 1, 3],
            backgroundColor: `rgba(0,0,0,0.65)`,
          }}
        >
          <img
            src={tableLeftCorner}
            alt="table left corner"
            style={{ position: "absolute", top: "-5px", left: "-5px" }}
          />
          <img
            src={tableRightCorner}
            alt="table right corner"
            style={{ position: "absolute", bottom: "-5px", right: "-5px" }}
          />
          <Table>
            <TableBody
              sx={{
                tr: {
                  td: {
                    borderBottomColor: "common.gray",
                    py: [1, 1, 2],
                  },
                },
              }}
            >
              <TableRow>
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      ...textGradient,
                    }}
                  >
                    TOTAL SUPPLY
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "right",
                    fontSize: "18px",
                  }}
                >
                  {totalSupply} NFTs
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      ...textGradient,
                    }}
                  >
                    PRICE
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "right",
                    fontSize: "18px",
                  }}
                >
                  {mintPrice}{" "}
                  <SolIcon
                    fontSize="small"
                    sx={{
                      ml: 1,
                    }}
                  />
                </TableCell>
              </TableRow>
              {mintDate && (
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{
                        display: "inline-block",
                        ...textGradient,
                      }}
                    >
                      MINT DATE
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "right",
                      fontSize: "18px",
                    }}
                  >
                    {DateTime.fromISO(mintDate, { zone: "utc" }).toFormat(
                      "dd/MM/yyyy HH:mm"
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroDataTable;
