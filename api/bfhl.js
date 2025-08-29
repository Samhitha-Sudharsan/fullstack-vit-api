export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ is_success: false, message: "Method not allowed" });
    }

    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Data must be an array" });
        }

        let even_numbers = [];
        let odd_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;
        let all_letters = [];

        data.forEach(item => {
            const strItem = String(item);
            if (/^[0-9]+$/.test(strItem)) {
                const num = parseInt(strItem);
                sum += num;
                if (num % 2 === 0) even_numbers.push(strItem);
                else odd_numbers.push(strItem);
            } else if (/^[a-zA-Z]+$/.test(strItem)) {
                alphabets.push(strItem.toUpperCase());
                all_letters.push(strItem);
            } else {
                special_characters.push(strItem);
            }
        });

        // Build alternating caps reversed string
        let concat_string = all_letters.join("").split("").reverse().map((ch, idx) => {
            return idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
        }).join("");

        res.status(200).json({
            is_success: true,
            user_id: "samhitha_sudharsan_03022005",
            email: "samhitha.sudharsan2022@vitstudent.ac.in",
            roll_number: "22BCE0366",
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: String(sum),
            concat_string
        });

    } catch (err) {
        res.status(500).json({ is_success: false, message: "Internal Server Error" });
    }
}
