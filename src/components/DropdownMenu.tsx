import React from "react";
import { Menu, Box, MenuProps, MenuItem, Divider, Stack } from "@mui/material";
import { Colors } from "../styles/theme";
import { Link } from "react-router-dom";
export interface IDropdownMenuProps extends MenuProps {
    onExit: () => void;
}

export const DropdownMenu: React.FunctionComponent<IDropdownMenuProps> = ({
    onExit,
    sx = {},
    onClose,
    ...props
}) => {
    return (
        <Menu
            {...props}
            sx={{
                ...sx,
                "& .MuiButtonBase-root:hover": {},
                left: "1rem",
                "& .MuiList-root": { paddingTop: 0 },
            }}
            onClose={onClose}
            MenuListProps={{ dense: true, sx: { pb: 0 } }}
        >
            <Box
                sx={{
                    backgroundColor: Colors.Gray400,
                    color: Colors.Light,
                    "& .MuiMenuItem-root": {
                        padding: "0.8rem 2rem",
                    },
                }}
            >
                <Stack
                    direction="column"
                    divider={
                        <Divider
                            orientation="vertical"
                            variant="fullWidth"
                            sx={{
                                "&.MuiDivider-root": {
                                    marginTop: 0,
                                    marginBottom: 0,
                                    border: `1px solid ${Colors.Dark600}`,
                                    opacity: 0.25,
                                },
                            }}
                        />
                    }
                    spacing={0}
                    sx={{ justifyContent: "center" }}
                >
                    <MenuItem component={Link} to="/record">
                        自分の記録
                    </MenuItem>
                    <MenuItem>体重グラフ</MenuItem>
                    <MenuItem>目標</MenuItem>
                    <MenuItem>選択中のコース</MenuItem>
                    <MenuItem component={Link} to="/column">
                        コラム一覧
                    </MenuItem>
                    <MenuItem>設定</MenuItem>
                </Stack>
            </Box>
        </Menu>
    );
};
