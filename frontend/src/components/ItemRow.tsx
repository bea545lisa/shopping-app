import { ListItem, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Item = {
  _id: string;
  name: string;
  bought: boolean;
};

type Props = {
  item: Item;
  onToggle: (item: Item) => void;
  onDelete: (id: string) => void;
};

export default function ItemRow({ item, onToggle, onDelete }: Props) {
  return (
    <ListItem
      sx={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        py: 1.5,
        px: 0
      }}
    >
      <Checkbox
        checked={item.bought}
        onChange={() => onToggle(item)}
        sx={{
          color: item.bought ? "#6b7280" : "#ec4899",
          "&.Mui-checked": {
            color: item.bought ? "#6b7280" : "#ec4899"
          }
        }}
      />

      <Typography
        onClick={() => onToggle(item)}
        sx={{
          textDecoration: item.bought ? "line-through" : "none",
          flexGrow: 1,
          color: item.bought ? "#9ca3af" : "#ec4899",
          cursor: "pointer"
        }}
      >
        {item.name}
      </Typography>

      <IconButton
        onClick={() => onDelete(item._id)}
        sx={{
          color: "#9ca3af",
          "&:hover": {
            color: "#ec4899"
          }
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}