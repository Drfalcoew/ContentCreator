import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './SubViewStyles';
import CustomModal from './CustomModal';

export interface Account {
    id: number,
    type: string,
    name: string,
    image: any,
    followers: number,
    posts: number
}

export interface AccountViewProps {
  accounts: Account[];
  selectedAccount: Account | null;
  onAccountChange: (account: Account) => void;
}

const AccountView = (props: AccountViewProps) => {
  const { selectedAccount, accounts, onAccountChange } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    console.log('Modal opened')
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const switchAccount = (account: Account) => {
    onAccountChange(account);
    closeModal(); // Close the modal after switching account
  };

  return (
    <View style={styles.accountViewContainer}>
         <CustomModal
                    visible={modalVisible}
                    onClose={closeModal}
                    title="Switch Accounts"
                    content={
                        <View>
                        {accounts && accounts.length > 0 ? accounts.map((account, index) => (
                            <TouchableOpacity key={index} onPress={() => switchAccount(account)}>
                                <Text>{account.name}</Text>
                            </TouchableOpacity>
                        )) : (<Text>No accounts found</Text>)}
                        </View>
                    }
                    />
        {selectedAccount ? (
            <>
                <Image source={selectedAccount.image} style={styles.accountViewImage} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={styles.accountViewUsername}>{selectedAccount.name}</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={styles.accountViewButton}>Switch Accounts</Text>
                    </TouchableOpacity>
                </View>
            </>
         ) : (
            <>
                <Text style={styles.nullAccountText}>No account selected, please </Text>
                <TouchableOpacity onPress={openModal}>
                    <Text style={styles.signInAccountText}>sign in</Text>
                </TouchableOpacity>
            </>
         )}
    </View>
  );
};

export default AccountView;
