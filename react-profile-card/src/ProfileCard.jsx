export function ProfileCard({ name, age, bio }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px'
        }}>
            < h2 > {name}</h2>
            <p>【年齢】{age}歳</p>
            <p>【自己紹介】{bio}</p>
        </div>
    );
}
