import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  Typography
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ItemRow from "./components/ItemRow";
import EmptyState from "./components/EmptyState";
import { getItems, addItem, toggleItem, deleteItem } from "./api";

type Item = {
  _id: string;
  name: string;
  bought: boolean;
  createdAt?: string;
};

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#18181b",
       paper: "#27272a"
    },
    primary: {
      main: "#ec4899"
    }
  }
});

function App() {

    const [name, setName] = useState("");
    const [items, setItems] = useState<Item[]>([]);

    const loadItems = async () => {

        const data = await getItems();
        //console.log(data);

        const sorted = data.sort((a: Item, b: Item) => {
            if (a.bought === b.bought) return 0;
            return a.bought ? 1 : -1;
        });

        setItems(sorted);
    };

    // nur beim ersten Rendern ausführen
    useEffect(() => {
        loadItems();
    }, []);

    const handleAddItem = async () => {

        if (!name.trim()) return;

        await addItem(name);
        setName("");
        loadItems();
    };

    const handleToggleItem = async (item: Item) => {

        await toggleItem(item._id, !item.bought);
        loadItems();
    };

    const handleDeleteItem = async (id: string) => {

        await deleteItem(id);
        loadItems();
    };

    return (

        <ThemeProvider theme={theme}>

            <Container
                maxWidth="sm"
                sx={{
                    mt: 8,
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "background.paper",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
                }}
            >

                <Typography
                  variant="h4"
                  gutterBottom
                  fontWeight="bold"
                  color="text.primary"
                >Einkaufsliste</Typography>

                <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>

                    <TextField
                        fullWidth
                        label="Ich brauche ..."
                        placeholder="Neuen Artikel hinzufügen"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") handleAddItem(); }}
                        sx={{
                            "& .MuiInputBase-input::placeholder": {
                            color: "#6b7280",   // 👈 dezentes grau
                            opacity: 1          // 👈 wichtig (MUI setzt sonst 0.5)
                            }
                        }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleAddItem}
                        disabled={!name.trim()}
                        sx={{
                            px: 3,
                            height: "56px",
                            backgroundColor: "#ec4899",
                            color: "#fff",
                            "&:hover": {
                            backgroundColor: "#db2777"
                            },
                            "&.Mui-disabled": {
                            backgroundColor: "#3f3f46", // 👈 dunkles grau
                            color: "#a1a1aa",
                            opacity: 1 // 👈 wichtig! verhindert lila/ausgewaschen
                            }
                        }}
                    >
                    HINZUFÜGEN
                    </Button>

                </div>

                <List>
                    {items.length === 0 ? (<EmptyState />) : (
                        items.map((item) => (
                            <ItemRow
                                key={item._id}
                                item={item}
                                onToggle={handleToggleItem}
                                onDelete={handleDeleteItem}
                            />
                        ))
                    )}
                </List>
            </Container>

        </ThemeProvider>
    );
}

export default App;