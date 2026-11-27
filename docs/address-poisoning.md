---
sidebar_position: 3
---

# Address-Poisoning Defense

Vanity address-poisoning attacks generate lookalike addresses matching the first 5 and last 4 characters of a trusted counterparty address while differing in the middle bytes.

Use `detectAddressPoisoning(candidate, trusted)` or the [AllSwap Interactive Validator](https://allswap.io/tools/address-validator) before signing any cross-chain swap or transfer.
