---
sidebar_position: 2
---

# Supported 46+ Chains & Memo Rules

| Ticker | Network Family | Checksum / Encoding | Mandatory Memo / Tag |
| :--- | :--- | :--- | :--- |
| `EVM` | Ethereum, Arbitrum, Base, Optimism, Polygon, BNB | Hex / EIP-55 | Optional |
| `BTC` | Bitcoin Legacy, SegWit, Taproot | Base58Check / Bech32 / Bech32m | None |
| `SOL` | Solana (SPL) | Ed25519 Base58 | Optional |
| `XRP` | XRP Ledger | Base58Check | **Destination Tag (32-bit uint)** |
| `XLM` | Stellar Lumens | Ed25519 StrKey | **Memo (up to 28 bytes)** |
| `ATOM` | Cosmos Hub | Bech32 | **Cosmos Memo** |
| `TON` | The Open Network | Base64Url / Raw | **Comment / Memo Tag** |
| `HBAR` | Hedera Hashgraph | Account ID | **Hedera Memo** |
